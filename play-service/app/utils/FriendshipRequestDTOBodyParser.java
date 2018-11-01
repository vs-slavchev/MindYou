package utils;

import akka.util.ByteString;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Inject;
import models.friendship.Friendship;
import models.friendship.FriendshipRequestDTO;
import play.libs.F;
import play.libs.streams.Accumulator;
import play.mvc.BodyParser;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

import java.util.concurrent.Executor;

public class FriendshipRequestDTOBodyParser implements BodyParser<FriendshipRequestDTO> {

    private Json jsonParser;
    private Executor executor;

    @Inject
    public FriendshipRequestDTOBodyParser(Json jsonParser, Executor executor) {
        this.jsonParser = jsonParser;
        this.executor = executor;
    }

    public Accumulator<ByteString, F.Either<Result, FriendshipRequestDTO>> apply(Http.RequestHeader request) {
        Accumulator<ByteString, F.Either<Result, JsonNode>> jsonAccumulator = jsonParser.apply(request);
        return jsonAccumulator.map(resultOrJson -> {
            if (resultOrJson.left.isPresent()) {
                return F.Either.Left(resultOrJson.left.get());
            } else {
                JsonNode json = resultOrJson.right.get();
                try {
                    FriendshipRequestDTO friendshipRequestDTO = play.libs.Json
                            .fromJson(json, FriendshipRequestDTO.class);
                    return F.Either.Right(friendshipRequestDTO);
                } catch (Exception e) {
                    return F.Either.Left(Results.badRequest(
                            "Unable to read FriendshipRequest from json: " + e.getMessage()));
                }
            }
        }, executor);
    }
}
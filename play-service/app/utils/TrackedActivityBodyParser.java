package utils;

import akka.util.ByteString;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Inject;
import models.appuser.AppUser;
import models.trackedactivity.TrackedActivity;
import play.libs.F;
import play.libs.streams.Accumulator;
import play.mvc.BodyParser;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

import java.util.concurrent.Executor;

public class TrackedActivityBodyParser implements BodyParser<TrackedActivity> {

    private BodyParser.Json jsonParser;
    private Executor executor;

    @Inject
    public TrackedActivityBodyParser(BodyParser.Json jsonParser, Executor executor) {
        this.jsonParser = jsonParser;
        this.executor = executor;
    }

    public Accumulator<ByteString, F.Either<Result, TrackedActivity>> apply(Http.RequestHeader request) {
        Accumulator<ByteString, F.Either<Result, JsonNode>> jsonAccumulator = jsonParser.apply(request);
        return jsonAccumulator.map(resultOrJson -> {
            if (resultOrJson.left.isPresent()) {
                return F.Either.Left(resultOrJson.left.get());
            } else {
                JsonNode json = resultOrJson.right.get();
                try {
                    TrackedActivity trackedActivity = play.libs.Json.fromJson(json, TrackedActivity.class);
                    return F.Either.Right(trackedActivity);
                } catch (Exception e) {
                    return F.Either.Left(Results.badRequest(
                            "Unable to read TrackedActivity from json: " + e.getMessage()));
                }
            }
        }, executor);
    }
}
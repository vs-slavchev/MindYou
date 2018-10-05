package controllers;

import org.junit.Test;
import play.Application;
import play.inject.guice.GuiceApplicationBuilder;
import play.mvc.Http;
import play.mvc.Result;
import play.test.WithApplication;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static play.mvc.Http.Status.OK;
import static play.test.Helpers.GET;
import static play.test.Helpers.route;

public class HomeControllerTest extends WithApplication {

    @Override
    protected Application provideApplication() {
        return new GuiceApplicationBuilder().build();
    }

    @Test
    public void testIndex() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(GET)
                .uri("/");

        Result result = route(app, request);
        assertEquals(OK, result.status());
    }

    //todo check how to instantiate with DI
    /*@Test
    public void testIndex() {
        Result result = new HomeController().index();
        assertEquals(OK, result.status());
        assertEquals("text/html", result.contentType().get());
        assertEquals("utf-8", result.charset().get());
        assertTrue(contentAsString(result).contains("Welcome"));
    }*/

    @Test
    public void testSum() {
        int a = 1 + 1;
        assertEquals(2, a);
    }

    @Test
    public void testString() {
        // Create and train mock
        List<String> mockedList = mock(List.class);
        when(mockedList.get(0)).thenReturn("first");

        // check value
        assertEquals("first", mockedList.get(0));

        // verify interaction
        verify(mockedList).get(0);
    }

}

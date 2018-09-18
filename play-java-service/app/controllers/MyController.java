package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class MyController extends Controller {

    public Result hello() {
        return ok("hello");
    }

}

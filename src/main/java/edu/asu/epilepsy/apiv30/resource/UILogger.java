package edu.asu.epilepsy.apiv30.resource;

import edu.asu.epilepsy.apiv30.service.PromisService;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * This API will be called to log all the possible user interactions of the PROMIS app.
 * User interactions will be captured from within the web app, from the native code,
 * as well as from the enhanced content being delivered to the app.
 *
 * @author poojaRal
 */

@Path("/uilogger")
@Produces(MediaType.APPLICATION_JSON)
public class UILogger {

  PromisService promis_service = new PromisService();

  /**
   * @api {POST} /uilogger Submit UI logger
   * @apiName SubmitLogger
   * @apiGroup UILogger
   * @apiVersion 0.0.0
   * @apiExample Example of body:
   * {
   *     "loggerResults" : []
   * }
   *
   * @apiSuccess {JSON} message The message of the operation.
   */
  @POST
  public Response submitUILogger(String content
  ) throws Exception {

    Response response = null;
    String jsonstring = promis_service.submitUILoggerResults(content);
    response = Response.status(Response.Status.CREATED)
      .entity(jsonstring).build();
    return response;
  }
}

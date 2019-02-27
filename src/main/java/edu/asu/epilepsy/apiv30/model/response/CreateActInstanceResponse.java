package edu.asu.epilepsy.apiv30.model.response;

import com.google.gson.JsonArray;

import java.util.List;

public class CreateActInstanceResponse extends Response {
  private List<String> sequences;
  private String activityName;
  private String activityId;
  private String startTime;
  private String endTime;
  private String state;
  private JsonArray activitySequence;
  private boolean showGame;

  public CreateActInstanceResponse() {
    this.sequences = null;
    this.activityName = null;
    this.activityId = null;
    this.startTime = null;
    this.endTime = null;
    this.state = null;
    this.activitySequence = null;
    this.showGame = false;
  }

  public CreateActInstanceResponse(Status message, List<String> sequences, String activityName, String activityId, String startTime, String endTime, String state, JsonArray activitySequence, boolean showGame) {
    super(message);
    this.sequences = sequences;
    this.activityName = activityName;
    this.activityId = activityId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.state = state;
    this.activitySequence = activitySequence;
    this.showGame = showGame;
  }

  public List<String> getSequences() {
    return sequences;
  }

  public void setSequences(List<String> sequences) {
    this.sequences = sequences;
  }

  public String getActivityName() {
    return activityName;
  }

  public void setActivityName(String activityName) {
    this.activityName = activityName;
  }

  public String getActivityId() {
    return activityId;
  }

  public void setActivityId(String activityId) {
    this.activityId = activityId;
  }

  public String getStartTime() {
    return startTime;
  }

  public void setStartTime(String startTime) {
    this.startTime = startTime;
  }

  public String getEndTime() {
    return endTime;
  }

  public void setEndTime(String endTime) {
    this.endTime = endTime;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public JsonArray getActivitySequence() {
    return activitySequence;
  }

  public void setActivitySequence(JsonArray activitySequence) {
    this.activitySequence = activitySequence;
  }

  public boolean isShowGame() {
    return showGame;
  }

  public void setShowGame(boolean showGame) {
    this.showGame = showGame;
  }
}

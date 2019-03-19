package edu.asu.epilepsy.apiv30.model;

import java.sql.Timestamp;
import java.util.ArrayList;

public class PostPatternComparison extends PostActivity {
  private int patientPin;
  private ArrayList<String> results;
  private int totalTimeTaken;
  private float screenWidth;
  private float screenHeight;
  private Timestamp _userSubmittedTimeStamp;
  private int score;

  public PostPatternComparison(String activityId, int activityInstanceId, ArrayList<String> results, int score,
                               int totalTimeTaken, float screenWidth, float screenHeight, Timestamp userSubmittedTimeStamp, int patintPin) {
    this.score = score;
    this._activityId = activityId;
    this._activityInstanceId = activityInstanceId;
    this.results = results;
    this.totalTimeTaken = totalTimeTaken;
    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;
    this._userSubmittedTimeStamp = userSubmittedTimeStamp;
    this.patientPin = patintPin;
  }

  public int getPatientPin() {
    return patientPin;
  }

  public void setPatientPin(int patientPin) {
    this.patientPin = patientPin;
  }

  public ArrayList<String> getResults() {
    return results;
  }

  public void setResults(ArrayList<String> results) {
    this.results = results;
  }

  public int getTotalTimeTaken() {
    return totalTimeTaken;
  }

  public void setTotalTimeTaken(int totalTimeTaken) {
    this.totalTimeTaken = totalTimeTaken;
  }

  public float getScreenWidth() {
    return screenWidth;
  }

  public void setScreenWidth(float screenWidth) {
    this.screenWidth = screenWidth;
  }

  public float getScreenHeight() {
    return screenHeight;
  }

  public void setScreenHeight(float screenHeight) {
    this.screenHeight = screenHeight;
  }

  public Timestamp get_userSubmittedTimeStamp() {
    return _userSubmittedTimeStamp;
  }

  public void set_userSubmittedTimeStamp(Timestamp _userSubmittedTimeStamp) {
    this._userSubmittedTimeStamp = _userSubmittedTimeStamp;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }
}

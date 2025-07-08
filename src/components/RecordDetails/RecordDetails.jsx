import React from "react";
import { useContext } from "react";
import { resultContext } from "../../provider/resultProvider.jsx";
import "./RecordDetails.css";

function RecordDetails({ data, isVisible }) {
  //filter and obtain an object. get other parameter on screen
  const { mentorId, teamId, id } = data;
  const { results } = useContext(resultContext);

  let tiesTeamsIds = [];
  console.log();
  const ties = results.ties.totalScoreTies.map((item) => {
    if (item.mentorId === mentorId) {
      tiesTeamsIds.push(...item.teams);
      return item;
    }
  })[0];

  const mentorTeamVM = results.votingMatrix[id]
    .filter((item) => {
      return tiesTeamsIds.length > 0
        ? tiesTeamsIds.includes(item.teamId)
        : item.teamId === teamId;
    })
    .sort((a, b) => b.adequacyScore - a.adequacyScore);

  return !isVisible ? <div className="mg-b-10"></div> : (
    <div id="record-details">
      {mentorTeamVM.length > 0 && (
        <div>
          {mentorTeamVM.map((team, index) => {
            return (
              <div key={index} id="record-details-container">
                <h3>
                  Details for Team {team.teamId} and Mentor {id + 1}
                </h3>
                <p>Adequacy Score: {team.adequacyScore}</p>
                <p>Total Score: {team.totalScore}</p>
                <p>Vote Emitted: {team.voteEmitted}</p>
                <p>Vote Received: {team.voteReceived}</p>
              </div>
            );
          })}
        </div>
      )}
      {ties && ties.adequacyScore && (
        <p>Tie adequacyScore. la decisión final es manual</p>
      )}
      {}
    </div>
  );
}

export default RecordDetails;

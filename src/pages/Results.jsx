import React, { useEffect, useContext, useState } from "react";
import ResultRecord from "../components/ResultRecord/ResultRecord.jsx";
import { fetchData } from "../services/api.js"; // Adjust the import path as necessary
import { resultContext } from "../provider/resultProvider.jsx";
import RecordDetails from "../components/RecordDetails/RecordDetails.jsx";

function Results() {
  const [teams, setTeams] = useState();
  const [mentors, setMentors] = useState();
  const { results, setResults } = useContext(resultContext);
  const [isVisible, setIsVisible] = React.useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    try {
      const [teamsData, mentorsData, resultsData] = await Promise.all([
        fetchData("equipos"),
        fetchData("mentores"),
        fetchData("matching"),
      ]);
      setTeams(teamsData);
      setMentors(mentorsData);
      setResults(resultsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>Resultados</h1>
      <p>
        Estos son los resultados que han salido en las votaciones segùn el
        ranking
      </p>
      {teams?.map((team, index) => {
        const convertedId = "team" + (index + 1);
        return (
          <div key={team.id}>
            <ResultRecord
              onClick={() => {
                setIsVisible((prev) => ({
                  ...prev,
                  [convertedId]: !prev[convertedId],
                }));
              }}
              data={{
                teams: teams[index],
                mentors:
                  mentors[
                  Number(
                    results.matchings.matching1[convertedId].slice(-1)[0]
                  ) - 1
                  ],
              }}
            ></ResultRecord>
            <RecordDetails
              data={{
                teamId: convertedId,
                mentorId: results.matchings.matching1[convertedId],
                id:
                  Number(
                    results.matchings.matching1[convertedId].slice(-1)[0]
                  ) - 1,
              }}
              isVisible={!!isVisible[convertedId]}
            ></RecordDetails>
          </div>
        );
      })}
    </div>
  );
}

export default Results;

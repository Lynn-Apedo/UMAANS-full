import React from "react";

export default function Agenda() {
  return (
    <>
      <div className="agendaContainer">
        <div className="agendaContainer_titlePage">
          <h2>agenda</h2>
        </div>
        <div className="agendaContainer_events">
          <div className="agendaContainer_events_eventOne">
            <h3>28 oct.</h3>
            <h4>Titre</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              vel dignissimos rem.
            </p>
          </div>
          <div className="agendaContainer_events_eventTwo">
            <h3>18 nov.</h3>
            <h4>Titre</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              vel dignissimos rem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

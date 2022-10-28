import React, { useEffect, useMemo } from "react";
/// react-router-dom
import { useParams } from "react-router-dom";

import data from "../../data/EventGardens.json";

function CardById() {
  const params = useParams();
  const idUser = params.idUser;

  const eventData = useMemo(
    () => data.find((eventObj) => eventObj.id === idUser),
    [idUser]
  );

  useEffect(() => {}, []);

  return <div>cardby id : {eventData.id}</div>;
}

export default CardById;

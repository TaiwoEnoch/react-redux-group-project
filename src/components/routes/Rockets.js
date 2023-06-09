import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/features/rockets/rocketsSlice';
import RocketItem from './RocketItems';

function Rockets() {
  const dispatch = useDispatch();
  const rocketsData = useSelector((store) => store.rockets);
  const fetch = useRef(true);
  useEffect(() => {
    if (fetch.current) {
      if (rocketsData.length === 0) {
        fetch.current = false;
        dispatch(getRockets());
      }
    }
  }, [dispatch, rocketsData.length]);

  return (
    <div className="rocket-holder">
      {rocketsData.map((rocket) => (
        <RocketItem
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          img={rocket.flickr_image}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Left from '../Components/Left';
import Mid from '../Components/Mid';
import Right from '../Components/Right';

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);
  return (
    <>
      <div className="w-full h-screen bg-zinc-900">
        <div className="w-full h-full flex">
          <div className="left md:border-r md:w-[20%] w-0 overflow-hidden">
            <Left />
          </div>
          <div className="mid md:border-r md:w-[55%] w-full h-full">
            <Mid />
          </div>
          <div className="right md:border-r md:w-[25%] w-0 overflow-hidden">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

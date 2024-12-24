import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

        const dispatch = useDispatch();
        const { isClicked } = useSelector((state) => state.nav);
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-black ">
        <div className="w-full h-full flex">
          <div className={`left transition-all duration-300 md:border-r bg-zinc-900 overflow-auto w-[250px] md:relative absolute z-50 ${isClicked ? 'translate-x-0' : 'translate-x-[-100%]'} md:translate-x-0 md:w-[30%] lg:w-[20%] h-full`}>
            <Left />
          </div>
          <div className="mid md:border-r lg:w-[55%] md:w-[70%] w-full h-full">
            <Mid />
          </div>
          <div className="right md:border-r lg:w-[25%] md:w-0 w-0 md:hidden lg:flex overflow-hidden">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // Function to navigate to the signup page
  const handlesign = () => {
    navigate('/signup');
  };
  

  return (
    <div>
      {/* Modal component */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* Modal close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <br />
            <span>Email</span>
            <br />
            <input
              type="text"
              placeholder="email"
              className="w-50 bg-slate-200 p-1"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
            <br />
            <br />
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="password"
              className="bg-slate-200 p-1"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            <br />
            <div className="pl-10 flex items-center justify-between mt-5 pr-10">
              <button className="bg-pink-500 px-2 py-1 rounded-lg">Login</button>
              <p>
                Not registered?{' '}
                <span
                  className="text-blue-400 underline cursor-pointer"
                  onClick={handlesign}
                >
                  Signup
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;

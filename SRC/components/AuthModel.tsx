import { X } from 'lucide-react';
import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  setModalType: (type: 'login' | 'signup') => void; // Add this line
}

export function AuthModal({ isOpen, onClose, type, setModalType }: AuthModalProps) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            {type === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
                placeholder="Enter your email"
              />
            </div>

            {type === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {type === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            {type === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setModalType('signup')} 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setModalType('login')} 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

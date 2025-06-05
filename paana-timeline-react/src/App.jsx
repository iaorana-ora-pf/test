import React from 'react';
import Timeline from './components/Timeline';
import './index.css';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Paana - Histoire de la Santé Publique</h1>
        <Timeline />
      </div>
    </main>
  );
}

export default App;
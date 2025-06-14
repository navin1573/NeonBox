"use client";

import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-400 mb-1">
          Release Date: {movie.releaseDate}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {movie.genres.map((genre, index) => (
            <span
              key={index}
              className="bg-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

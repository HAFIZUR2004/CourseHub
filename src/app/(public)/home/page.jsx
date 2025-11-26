import React from "react";

const Page = () => {
  const features = [
    {
      title: "Fun Learning",
      desc: "Kids learn coding with games, animations & challenges.",
      icon: "🎮",
    },
    {
      title: "Expert Instructors",
      desc: "Professional teachers who make learning super fun!",
      icon: "👨‍🏫",
    },
    {
      title: "Future Skills",
      desc: "Develop creativity, problem-solving & real tech skills.",
      icon: "🚀",
    },
  ];

  const courses = [
    {
      title: "Python for Kids",
      img: "https://i.ibb.co/Y71ZTFns/pro-cyber-sport-gamer-relaxing-playing-video-games-using-vr-headset-late-night-virtual-shooter-game.jpg",
    },
    {
      title: "Creative Web Design",
      img: "https://i.ibb.co/20fCD9TY/web-design.jpg",
    },
    {
      title: "Books & Logic Thinking",
      img: "https://i.ibb.co/wZfJj41g/still-life-books-versus-technology.jpg",
    },
    {
      title: "Robotics Fun",
      img: "https://i.ibb.co/4nH6gvS7/images-2.png",
    },
    {
      title: "Scratch Game Making",
      img: "https://i.ibb.co/XrMXm4Wn/images-1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800">
      {/* Hero Banner */}
      <section className="text-white py-24 px-6 text-center relative overflow-hidden rounded-b-3xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeIn">
          Welcome to Kids Coding World! 👧🧒💻
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-6 animate-fadeIn delay-200">
          Fun & interactive coding courses for kids to learn Python, Scratch, Robotics, and more!
        </p>
        <button className="mt-4 md:mt-6 bg-white text-indigo-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 shadow-lg transition transform hover:scale-105">
          Explore Courses
        </button>
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full animate-pulse"></div>
      </section>

      <div className="h-16"></div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-md">
          Why Learn With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
            >
              <div className="text-6xl mb-4 animate-bounce">{f.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-20"></div>

      {/* Sliding Courses */}
      <section className="max-w-6xl mx-auto px-6 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-md">
          Popular Kids Courses
        </h2>
        <div className="overflow-x-auto py-4">
          <div className="flex gap-6 animate-slide hover:[animation-play-state:paused]">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer w-64 flex-shrink-0"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-40 w-full object-cover rounded-2xl mb-3"
                />
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fun & interactive lessons designed specially for kids.
                </p>
                <button className="mt-3 w-full bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 transition shadow">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20"></div>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-md">
          What Parents Say
        </h2>
        <div className="bg-white/90 rounded-3xl p-8 shadow-2xl">
          <p className="text-gray-700 text-lg md:text-xl italic">
            “My child absolutely loves these courses! The lessons are fun, interactive, and perfect for young learners.”
          </p>
          <h4 className="text-indigo-600 font-semibold mt-4">— Parent of a 10-year-old</h4>
        </div>
      </section>

      <div className="h-20"></div>

      {/* CTA */}
      <section className="text-center -mb-16 py-20 bg-white/10 text-white rounded-t-3xl animate-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Ready to Start Coding?</h2>
        <p className="opacity-90 mb-6 md:text-lg">Join thousands of kids learning to build their future.</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Page;

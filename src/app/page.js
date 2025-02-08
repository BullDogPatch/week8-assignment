import Link from 'next/link';

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 text-white'>
      <div className='max-w-lg text-center'>
        <h3 className='text-2xl font-bold mb-4 text-gray-200'>
          Been to a football match lately?
        </h3>

        {/* Credit to ChatGPT for this paragraph */}
        <p className='text-gray-400 leading-relaxed mb-6'>
          Share your experience with fellow fans! Whether it's the electric
          atmosphere at the stadium, a stunning goal, or just the joy of being
          part of the crowd, we'd love to hear your story. Leave a blog post
          about your match-day memories or join the conversation by commenting
          on someone else's blog. Let&apos;s celebrate the beautiful game
          together!
        </p>

        <Link
          href='/new-post'
          className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition'
        >
          Make a Post
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

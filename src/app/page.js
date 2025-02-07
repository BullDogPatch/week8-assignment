import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h3>Been to a football match lately?</h3>

      {/* Credit to chatGPT for this paragraph */}
      <p>
        Share your experience with fellow fans! Whether it's the electric
        atmosphere at the stadium, a stunning goal, or just the joy of being
        part of the crowd, we'd love to hear your story. Leave a blog post about
        your match-day memories or join the conversation by commenting on
        someone else's blog. Let&apos;s celebrate the beautiful game together!
      </p>
      <Link href='/new-post'>Make a Post</Link>
    </div>
  );
}

export default HomePage;

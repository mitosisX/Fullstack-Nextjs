import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and Share
        <br className='max-mdhidden' />
        <span className='orange_gradient text-center'>AI Powered prompts</span>
      </h1>
      <p className='desc text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sed, ab,
        tenetur nulla ipsam, amet soluta reprehenderit adipisci quisquam dicta
        accusantium quae iusto suscipit at praesentium debitis repellat numquam
        iste?
      </p>

      <Feed />
    </section>
  );
};

export default Home;

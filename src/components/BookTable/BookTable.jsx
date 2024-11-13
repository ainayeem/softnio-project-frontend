import bookTableBanner from "../../assets/images/book-table-banner.png";
const BookTable = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bookTableBanner})` }}
    >
      <div className="max-w-screen-xl xl:mx-auto mx-8 pt-8">
        <p className="text-[#BD1F17] xl:font-bold">&#9642; Book Now</p>
        <h1 className="uppercase text-5xl text-white">book your table</h1>
        <p className="text-white roboto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          voluptas perspiciatis velit unde facilis sequi dolores inventore enim
          beatae rerum!
        </p>
        {/* <div className="roboto py-10">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-2 text-white bg-transparent border-2 placeholder:text-white my-4"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-full p-2 text-white bg-transparent border-2 placeholder:text-white my-4"
          />
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-2 text-white bg-transparent border-2 placeholder:text-white my-4"
          />

          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-2 text-white bg-transparent border-2 placeholder:text-white my-4"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full h-[140px] text-white bg-transparent border-2 placeholder:text-white my-4"
          />
        </div> */}
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 xl:gap-20 roboto">
          <form
            // onSubmit={handleSendMail}
            className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-y-5 xl:gap-x-10"
          >
            <label className="form-control w-full">
              <input
                id="name"
                type="text"
                placeholder="Your Name *"
                className="input bg-transparent border-2 rounded-none text-white placeholder:text-white border-white focus:border-white"
                required
              />
            </label>
            <label className="form-control w-full">
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="input bg-transparent border-2 rounded-none text-white placeholder:text-white border-white focus:border-white"
              />
            </label>
            <label className="form-control xl:col-span-2 w-full">
              <textarea
                id="message"
                className="textarea bg-transparent border-2 border-white rounded-none text-white placeholder:text-white focus:border-white text-base resize-none"
                placeholder="Type your message here"
                rows={11}
              ></textarea>
            </label>
            <div className="xl:col-span-2 pb-8">
              <input
                type="submit"
                value="BOOK NOW"
                className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none roboto"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;

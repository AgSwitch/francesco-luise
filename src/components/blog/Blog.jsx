import { Fa500Px } from "react-icons/fa";
import Pill from "../pill/Pill";

const Blog = () => {
    var description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  return (
    <section
      id="blog"
      className=" min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
    >
      <h3 className="text-6xl font-bold">Blog</h3>
      <div className="grid grid-cols-3 gap-8 px-8">
          <Pill type={'imagePill'} description={description} title={'dsadadsasa'} link={{ target: "_blank", action: "mailto:", href: 'contacts.email' }} image={'https://images.pexels.com/photos/27730430/pexels-photo-27730430/free-photo-of-fitness-salute-atleta-esercizio.jpeg?auto=compress&cs=tinysrgb&w=600'} />
          <Pill type={'imagePill'} description={description} title={'dsadadsasa'} link={{ target: "_blank", action: "mailto:", href: 'contacts.email' }} Icon={Fa500Px} />
          <Pill type={'imagePill'} description={description} title={'dsadadsasa'} link={{ target: "_blank", action: "mailto:", href: 'contacts.email' }} Icon={Fa500Px} />
      </div>
    </section>
  );
};

export default Blog;

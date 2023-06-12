/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const OurFeatures = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">Our Features</h2>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                1.Camp helps kids build a unique interest
              </h2>
              <p className="text-indigo-600">
                There aren’t many schools that offer game design classes,
                archery, or entrepreneurship. But, there are a number of camps
                that specialize in these activities (up to 14,000 camps in the
                US actually, as estimated by the American Camp Association). So
                if your child has an interest in anything outside of the core
                school subjects or sports, where do they go to learn or gain
                experience? There might be a few after-school options like a
                robotics club, etc., but even then, you're adding one more thing
                onto the plate of a student who already has homework and other
                commitments to juggle. So, camp is one very good,
                distraction-free option, and allows for a time for kids to kick
                the tires on a new interest. From there, you never know what
                that interest might turn into...
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                2.Camp reinvents and eliminates categories
              </h2>
              <p className="text-indigo-600">
                "Students often attend school year after year with the same
                peers, which can lead to labeling and being 'stuck' with a
                particular perception. A child may become known as studious,
                quiet, etc., when, really, he can be boisterous in another
                setting. Children who go to day or sleepaway camps meet a whole
                other group of people in a different environment. Often times, a
                child will break out of his supposed categorization if given the
                chance." That is such a great point and something I've
                experienced personally, both through making changes in myself
                and witnessing changes through peers. Summer camp really can
                change lives. We've all been shaped by our environments in one
                way or another, but when that shaping forms someone into a
                permanent, ill-fitting configuration, it's difficult for them to
                "break out" unless they get out. Camp allows kids to get
                out...and into an environment filled with others who see what is
                in front of them, rather than what they've been trained to see
                through years of false reinforcement.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                3.Camp allows for a deep dive into new skills
              </h2>
              <p className="text-indigo-600">
                Even if your school does offer "different" activities, summer
                camp allows for a deeper dive. Think about giving your child a
                week or more to be immersed in coding, or specific
                skill-building in a sport like Lacrosse. These opportunities
                exist at camp, and it’s tough to find such focused activity
                elsewhere. (Not to mention that if it is something like coding
                you choose this summer, there are a number of benefits of
                technology for children, on top of the camp benefits!) Plus,
                kids and teens are able to really get out of their comfort zone
                to take some risks with their skills, without the looming fear
                of failure and resulting repercussions.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                4.Camp leads to a new type of friendship-building
              </h2>
              <p className="text-indigo-600">
                Also, it’s not only a week engrossed in one particular sport, or
                subject, but it’s jumping into an activity with other kids
                serious enough about it to attend camp (just like your child).
                I’ve heard it a million times from campers: “I’m in my element”
                or, “I’ve found my people!” Students who interact with
                like-minded peers are able to easily build friendships
                (potential lifelong friendships) rooted in similar interests.
                These relationships can lead to even more, as students are
                essentially networking, and have names to call on when it comes
                to doing a side project, finding an internship, or even starting
                a new businesses with the friend they met at Minecraft summer
                camp, or wherever.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                5.Camp helps with mental stimulation & physical activity
              </h2>
              <p className="text-indigo-600">
                We are all familiar with summer leaning loss, slide, or whatever
                you want to call it. Many of us probably also feel that kids
                don’t get enough physical activity during the summer months as
                well. Camp can get kids going, both mentally and physically.
                Have a child who loves video games? Who doesn’t? Camp will allow
                kids to get off of couches and into courses that teach them how
                to make games instead of simply playing. Camp will also allow
                for physical activity no matter their camp of choice. (Yes, even
                tech camps provide plenty of outdoor time. More camp myths.)
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                6.Camp reinforces independence and empowerment
              </h2>
              <p className="text-indigo-600">
                Even if you think your kids are independent, nothing brings out
                and tests that independence more than giving them time away from
                you, on their own. Without mom or dad around, who is going to
                make your child’s decisions? Who is going to tell them to brush
                their teeth? Make the bed? Manage their time? At camp, they
                themselves are. Camp allows for a chance for children to truly
                understand the thought that goes into making a good decision,
                and will discover even more about themselves in the process. Not
                to mention (ear muffs for those parents who think they should be
                the only source of guidance for their kids), children can also
                lean on peers for support, if they do need additional help.
                There are a number of other life skills kids and teens can
                establish at camp, too.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurFeatures;

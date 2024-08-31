import React from "react";
import { Flex } from "antd";

const About = () => (
  <section id="about">
    <h3>History of the lodge</h3>

    <Flex gap="middle" wrap>
      <p>
        Warwickshire Royal Air Force Lodge 9456 started when a group of Masons
        who were RAF veterans got together for a Sunday lunch.<br></br>
        <br></br>
        After two years, in 1992, it was Consecrated as a Freemason's Lodge
        under the banner of the United Grand Lodge of England. We are the only
        RAF Freemason's Lodge in the country to accept all RAF ranks, as well as
        those interested in the RAF. Our founder members included four DFC medal
        holders, Battle of Britain Spitfire pilots, dam buster raid airmen,
        airmen who were involved in the sinking of Germany's pocket battleship,
        Tirpitz, and pilots who had been shot down but escaped the Nazis so that
        they could return to their Squadrons.<br></br>
        <br></br>
        Originally a fully peripatetic, travelling Lodge, the members enjoyed
        weekends away on bases, meeting up with old pals. The wives of the
        Brethren would accompany them, and there was a vibrant social life.{" "}
        <br></br>
        <br></br>
        Today, the Lodge carries on the traditions of the founders, with visits
        to bases and a RAF centric culture which boasts the camaraderie of the
        RAF together with a unique RAF identity and spirt.
      </p>
      <p></p>
      <iframe
        width="550vw"
        height="500vw"
        src="https://www.youtube.com/embed/PLwPnUvHdyk?si=-unLm_JYlXziSDqa&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Flex>
  </section>
);

export default About;

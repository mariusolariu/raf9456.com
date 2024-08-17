import React from "react";
import { Flex } from "antd";

const About = () => (
  <section id="about">
    <h3>History of the lodge</h3>

    <Flex gap="middle" wrap>
      <p>
        RAF 9456 started as a Sunday lunch get together for a group or RAF
        veteran’s.<br></br>
        <br></br>
        After two years it was formally, in 1992, established as a freemason
        lodge. The only RAF freemasons lodge in the country to accept all RAF
        ranks and those interested in the RAF. RAF 9456 founder members had four
        DFC medal holders among them. Battle of Britain spitfire pilots, dam
        buster raid airmen, airmen who put the bomb in Germany’s pocket battle
        ship, Tirpitz, and pilots who had been shot down but escaped the Nazis
        so they could go back and bombed them some more. <br></br>
        <br></br>
        Originally a fully peripatetic, travelling lodge, the members enjoyed
        weekends away on bases, meeting up with old pals. The wives would
        accompany the brethren and there was a vibrant social life. <br></br>
        <br></br>
        Today, RAF 9456 caries on the traditions of the founders with visits to
        bases and a RAF centric culture which boasts the comradery of the RAF
        together with a unique RAF identity and spirt.
      </p>
      <p></p>
      <iframe
        width="550vw"
        height="500vw"
        src="https://www.youtube.com/embed/PLwPnUvHdyk?si=-unLm_JYlXziSDqa"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Flex>
  </section>
);

export default About;

import React from "react";
import "../../styles/BlogArticle.css";
import { Image } from "antd";

const RoadToFM = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1 class="centerBlogTitle">
        The road to Freemasonry: A Journey into Freemasonry
      </h1>
      <h3>Introducing myself to the Lodge and the Lodge to Halton House</h3>

      <p>
        I had taken the first step and sought information from a relative about
        Freemasonry! He lived in Essex, while we live in Telford, Shropshire. He
        promised to make enquiries and one evening some months later, I received
        a call from a gentleman who said that he believed I was interested in
        Freemasonry and that the message had come from someone in Essex. He was
        the Lodge Secretary, WBro Colin Hill.
      </p>

      <p>
        We chatted for a while, and he asked if it would be possible for him and
        the lodge's founding master, W. Bro. Antony Farnath, and their wives, to
        meet me and my wife soon at a location to suit us. My suggestion to meet
        in the bar of the Officers' Mess at RAF Cosford, was accepted with
        alacrity! At the meeting I was advised that the next meeting at which I
        could be initiated into the lodge would be on the 9 th of February, the
        following year, 1998. With my wife's blessing, I was happy to accept the
        invitation to become a member of the lodge and began to look forward to
        my initiation.
      </p>

      <p>
        A while later I learned that the lodge meeting was to be held at Thame
        in Oxfordshire and they were hoping to get a visit to RAF Halton. I
        explained that I had been stationed at RAF Halton until September the
        previous year and was sure that I could "make it happen" and added that
        during my tour at RAF Halton, I had been the "official tour guide" for
        the RAF Halton Officers' Mess, which had originally been the country
        house of Alfred Rothschild. I was able to arrange permission for the
        visit to the mess for the lodge members, which would occur before going
        on to the Masonic Centre in Thame for my initiation.
      </p>

      <p>
        The RAF's use of the Halton Estate of Albert de Rothschild was the
        subject of many and varied tales dating back to the first world war.
      </p>

      <p>
        Let me introduce you to the Estate, the House, and its role as the home
        of the Officers' Mess for RAF Halton.
      </p>

      <div>
        <Image
          width={500}
          src="./images/haltonEstate.png"
          style={{
            float: "left", // Float the image to the left
            marginRight: "15px", // Add space between the image and text
            marginBottom: "10px", // Optional: Add space below the image
          }}
        />
        <p
          style={{
            float: "left",
            maxWidth: "50vw",
            fontSize: "medium",
          }}
        >
          The famous Rothschild family settled in Buckinghamshire during the
          nineteenth century with five family homes being built. Only Waddesdon
          Manor and Halton House survive today. Building Halton House took just
          three years, and it was opened in 1884. The house was used almost
          every weekend by Alfred to entertain his family and guests, anyone and
          everyone who was worthy was invited to enjoy Alfred’s amazing
          hospitality for the weekend. Each Friday morning, Alfred would have
          £1,000 delivered to his London house (in notes and gold sovereigns) to
          cover the costs for the weekend’s entertaining! That would equate to
          just over £155,000 today! After the initial purchase of the estate,
          further purchases increased the size of the estate to about 3,250
          acres. Notable regular guests included Prince Albert, later to become
          King Edward VII, and it was usual for a Mrs Lily Langtry to be on the
          same guest list when the heir to the throne was present! <br></br>
          <br></br>
          The first military link to Halton House came with the threat of war in
          Europe in 1913. Alfred offered free access to his estate to his friend
          Lord Kitchener, and later gave all the famous beech trees to be used
          to provide timber to build the trench network so indictive of the war
          on the Western Front. Additionally, huge networks of trenches were
          built on the estate to help train soldiers before going to the front.
          Sadly, Alfred died in January 1918 and the bulk of the estate passed
          to his nephew, Lionel, who had no interest in the estate. He accepted
          an offer of £112,000 (about a thirds of the true value) from the
          government, who realised it was cheaper to buy it than restore it to
          its former condition. Plus, there were plans afoot that would lead to
          the formation of the Royal Air Force and Halton was a part of those
          plans. RAF Halton was the birthplace and home of the RAF
          Apprenticeship scheme that was based there from 1922 until the mid
          1990s when it was transferred to RAF Cosford.
        </p>
      </div>

      <p>
        My association with RAF Halton began when I was posted to the Department
        of Training Design and Management in the summer of 1995. Most of the
        officers who lived in the mess were accommodated in the new
        accommodation block which can be seen in the right-hand side of the
        photo. The other new single story on the left was the enlarged dining
        room.
      </p>

      <p>
        For just under two years, this house was my home from Monday to Friday
        each week, and I regard myself as fortunate to have been a part of the
        living history on the Royal Air Force.
      </p>
    </div>
  );
};

export default RoadToFM;

"use client";
import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "next-share";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { useUrl } from "nextjs-current-url";

const Share = ({ url, description, subject, body }) => {
  const { href: currentUrl, pathname } = useUrl() ?? {};
  // const [url, setURL] = useState("");

  if (!url) {
    url = currentUrl;
  }

  return (
    <>
      <ul className="inline-flex space-x-3 social-buttons mx-auto text-center">
        <li>
          <TwitterShareButton
            url={url}
            title={description}
            hashtags={["plexcalc"]}>
            <FaXTwitter />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton
            url={url}
            quote={description}
            hashtag={"#plexcalc"}
            className="">
            <FiFacebook />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={url}>
            <SlSocialLinkedin />
          </LinkedinShareButton>
        </li>

        <li>
          <EmailShareButton url={url} subject={subject} body={body}>
            <MdOutlineMail />
          </EmailShareButton>
        </li>
      </ul>
    </>
  );
};

export default Share;

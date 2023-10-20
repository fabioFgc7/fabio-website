import { SVGProps } from "react";
import "./icons.css";
import { useTheme } from "../context/DarkContext";

export const GitHubIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace=' none'
      viewBox='0 0 32 32'
      width={24}
      height={24}
      {...props}
      className='github'
      aria-label='GitHub botton'
      role='img'
      aria-describedby='GitHub icon'>
      <path
        fill={`${mode ? "#00ADB5" : "#000"}`}
        fillRule='evenodd'
        d='M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.179.8.146 1.052-.328 1.052-.752 0-.38.008-1.442 0-2.777-4.449.967-5.371-2.107-5.371-2.107-.727-1.848-1.775-2.34-1.775-2.34-1.452-.992.109-.973.109-.973 1.605.113 2.451 1.649 2.451 1.649 1.427 2.443 3.743 1.737 4.654 1.329.146-1.034.56-1.739 1.017-2.139-3.552-.404-7.286-1.776-7.286-7.906 0-1.747.623-3.174 1.646-4.292-.165-.404-.715-2.031.157-4.234 0 0 1.343-.43 4.398 1.641a15.31 15.31 0 0 1 4.005-.538c1.359.006 2.727.183 4.005.538 3.055-2.07 4.396-1.641 4.396-1.641.872 2.203.323 3.83.159 4.234 1.023 1.118 1.644 2.545 1.644 4.292 0 6.146-3.74 7.498-7.304 7.893C19.479 23.548 20 24.508 20 26v4.428c0 .428.258.901 1.07.746C27.422 29.055 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='sun'
    {...props}
    aria-label='Sun botton'
    role='img'
    aria-describedby='sun icon'>
    <circle
      cx={12}
      cy={12}
      r={5}
    />
    <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
  </svg>
);
export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={24}
    height={24}
    className='moon'
    {...props}
    aria-label='Moon Mode botton'
    role='img'
    aria-describedby='Moon Icon'>
    <title />
    <path
      fill='#fff'
      stroke='#000'
      d='M20.21 15.32A8.56 8.56 0 1 1 11.29 3.5a.5.5 0 0 1 .51.28.49.49 0 0 1-.09.57A6.46 6.46 0 0 0 9.8 9a6.57 6.57 0 0 0 9.71 5.72.52.52 0 0 1 .58.07.52.52 0 0 1 .12.53Z'
    />
  </svg>
);
export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 56.7 56.7'
      width={24}
      height={24}
      {...props}
      className='insta'
      fill={`${mode ? "#00ADB5" : "#000"}`}
      aria-label='Instagram botton'
      role='img'
      aria-describedby='Instagram'>
      <path d='M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z' />
      <circle
        cx={41.5}
        cy={16.4}
        r={2.9}
      />
      <path d='M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z' />
    </svg>
  );
};
export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 32 32'
      width={24}
      height={24}
      {...props}
      className='linkedin'
      aria-label='Linkedin botton'
      role='img'
      aria-describedby='Linkedin icon'>
      <path
        fill={`${mode ? "#00ADB5" : "#000"}`}
        d='M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z'
      />
      <g fill='#FFF'>
        <path d='M7 11h4v14H7zM20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z' />
        <circle
          cx={9}
          cy={8}
          r={2}
        />
      </g>
    </svg>
  );
};
export const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 128 128'
      width={24}
      height={24}
      {...props}
      className={`${mode ? "arrowDark" : "arrowLight"} `}
      aria-label='ArrowUpIcon'
      role='img'
      aria-describedby='Arrow-up icon'>
      <path
        d='M24.666 57.12 64 17.787M64 17.787l39.334 39.333'
        style={{
          fill: "none",

          strokeWidth: 12,
          strokeLinecap: "square",
          strokeMiterlimit: 10,
        }}
        stroke={`${mode ? "#fff" : "#000"}`}
      />
      <path
        d='M64 17.787v100.426'
        style={{
          fill: "none",

          strokeWidth: 12,
          strokeMiterlimit: 10,
        }}
        stroke={`${mode ? "#fff" : "#000"}`}
      />
    </svg>
  );
};

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      width={24}
      height={24}
      {...props}
      stroke={`${mode ? "#00ADB5" : "#000000"}`}
      fill={`${mode ? "#00ADB5" : "#000"}`}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-label='Close botton'
      role='img'
      aria-describedby='Close icon'>
      <title id='title'>Close botton</title>

      <g id='cross'>
        <path
          d='m7 7 18 18M7 25 25 7'
          className='cls-1'
        />
      </g>
    </svg>
  );
};

export const NarbarsIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 24 24'
      width={24}
      height={24}
      display='none'
      {...props}
      fill={`${mode ? "#00ADB5" : "#000"}`}
      aria-label='Narbar botton'
      role='img'
      aria-describedby='Narbar icon'>
      <g id='_icons'>
        <path d='M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zM5 13h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zM5 19h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z' />
      </g>
    </svg>
  );
};
export const LinkIcon = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className={`${mode ? "linkDark" : "linkLight"}`}
      {...props}
      aria-label='Link Icon'
      role='img'
      aria-describedby='Link icon'>
      <path
        stroke={`${mode ? "#00ADB5" : "#000"}`}
        d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3'
      />
    </svg>
  );
};
export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  const { mode } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Livello 1'
      viewBox='0 0 128 128'
      {...props}
      width={24}
      height={24}
      className={`${mode ? "leftDark" : "leftLight"}`}
      aria-label='Arrow left Icon'
      role='img'
      aria-describedby='Arrow left icon'>
      <title />
      <path
        fill={mode ? "#fff" : ""}
        stroke={mode ? "#fff" : ""}
        d='M64 0a64 64 0 1 0 64 64A64.07 64.07 0 0 0 64 0Zm0 122a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z'
      />
      <path
        fill={mode ? "#fff" : ""}
        stroke={mode ? "#fff" : ""}
        d='M74.12 35.88a3 3 0 0 0-4.24 0l-26 26a3 3 0 0 0 0 4.24l26 26a3 3 0 0 0 4.24-4.24L50.24 64l23.88-23.88a3 3 0 0 0 0-4.24Z'
      />
    </svg>
  );
};

import { CustomSVGProps } from '.';

export function ThumbsDown({ width = '18', height = '18' }: CustomSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
      <path
        d="M9.29626 13.6635L9.12376 15.4403C9.05551 16.1543 8.38876 16.6388 7.71526 16.4648C6.70201 16.2023 5.99026 15.261 5.99026 14.1818L5.99026 11.9055C5.99026 11.3993 5.99026 11.1458 5.88076 10.9605C5.81851 10.8548 5.73301 10.7655 5.63101 10.7018C5.45101 10.5885 5.20576 10.5885 4.71601 10.5885L4.41901 10.5885C3.14176 10.5885 2.50351 10.5885 2.11051 10.296C1.81576 10.0763 1.60801 9.75451 1.52551 9.39001C1.41601 8.90251 1.66126 8.29276 2.15251 7.07476L2.39701 6.46726C2.53883 6.11541 2.59686 5.7354 2.56651 5.35726C2.39251 3.20176 4.10176 1.38601 6.19126 1.50526L14.0093 1.95451C14.8635 2.00326 15.2903 2.02801 15.6758 2.36926C16.062 2.71051 16.1348 3.06226 16.2795 3.76501C16.5876 5.26005 16.5735 6.80358 16.2383 8.29276C16.026 9.22876 15.132 9.73276 14.2088 9.61276C11.7608 9.29776 9.54151 11.1278 9.29626 13.6635Z"
        stroke="url(#paint0_linear_1204_2811)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 9.375L12.8528 9.03225C13.5179 6.81489 13.482 4.4462 12.75 2.25"
        stroke="url(#paint1_linear_1204_2811)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1204_2811"
          x1="16.5006"
          y1="16.5003"
          x2="-1.1161"
          y2="16.0143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB70CC" />
          <stop offset="0.216162" stopColor="#7481C0" />
          <stop offset="0.457412" stopColor="#5C97BB" />
          <stop offset="0.937262" stopColor="#E9D55E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1204_2811"
          x1="13.3266"
          y1="9.375"
          x2="12.6489"
          y2="9.37349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB70CC" />
          <stop offset="0.216162" stopColor="#7481C0" />
          <stop offset="0.457412" stopColor="#5C97BB" />
          <stop offset="0.937262" stopColor="#E9D55E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10} cy={10} r={10} fill="currentColor" />
      <g fill="#fff" transform="translate(9 5)">
        <rect width={2} height={7} rx={1} />
        <rect width={2} height={2} y={8} rx={1} />
      </g>
    </svg>
  );
}

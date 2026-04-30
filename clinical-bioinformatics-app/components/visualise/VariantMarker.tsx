type VariantMarkerProps = {
    positionPercent: number;
    label: string;
    coordinate: string;
  };
  
  export function VariantMarker({
    positionPercent,
    label,
    coordinate,
  }: VariantMarkerProps) {
    const safePosition = Math.min(Math.max(positionPercent, 0), 100);
  
    return (
      <div
        className="absolute top-0 z-10 flex -translate-x-1/2 flex-col items-center"
        style={{ left: `${safePosition}%` }}
        aria-label={`${label} at ${coordinate}`}
      >
        <div className="rounded-full border border-amber-300 bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 shadow-sm">
          Variant
        </div>
  
        <div className="h-16 w-0.5 bg-amber-500" />
  
        <div className="h-4 w-4 rounded-full border-2 border-white bg-amber-500 shadow" />
      </div>
    );
  }
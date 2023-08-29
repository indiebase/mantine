import React, { useEffect, useState } from 'react';
import { CarouselCardsDemos } from '@reactgets/demos';
import { Embla } from '@reactgets/carousel';

export function Carousel() {
  const [embla, setEmbla] = useState<Embla>(null);

  // required to fix incorrect carousel slides position after animation
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, 200);
    }
  }, [embla]);

  return (
    <div>
      <CarouselCardsDemos loop getEmblaApi={setEmbla} />
    </div>
  );
}

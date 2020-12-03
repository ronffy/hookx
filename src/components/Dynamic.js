/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 17:29:06
 * @LastEditTime 2020-11-30 18:13:02
 * @LastEditors ronffy
 */
import React, { lazy, Suspense, useMemo } from 'react';

export default function Dynamic({
  component,
  fallbackText = 'loading...',
  ...props
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Medium = useMemo(() => lazy(component), []);
  return (
    <Suspense fallback={fallbackText}>
      <Medium {...props} />
    </Suspense>
  )
}
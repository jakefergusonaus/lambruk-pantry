function useIsMobile(bp) {
  bp = bp || 720;
  const q = '(max-width:' + bp + 'px)';
  const [m, setM] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = (e) => setM(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, [q]);
  return m;
}
window.useIsMobile = useIsMobile;

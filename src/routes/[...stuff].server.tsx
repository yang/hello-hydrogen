export default function ({request}: any) {
  const {pathname} = new URL(request.url);
  return <div>hello!</div>;
}

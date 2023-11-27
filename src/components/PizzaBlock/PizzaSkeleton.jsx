import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={277}
    height={464}
    viewBox="0 0 277 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#f8e2c9"
    {...props}
  >
    <circle cx="135" cy="148" r="107" /> 
    <rect x="-6" y="281" rx="0" ry="0" width="369" height="17" /> 
    <rect x="1" y="324" rx="0" ry="0" width="364" height="71" /> 
    <rect x="4" y="409" rx="0" ry="0" width="83" height="36" /> 
    <rect x="138" y="408" rx="0" ry="0" width="144" height="52" />
  </ContentLoader>
)

export default MyLoader
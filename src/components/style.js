const divider = {
  content: "",
  display: "block",
  height: "1px",
  background: "#666363",
  width: "100%",
};

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    maxWidth: "50%",
    maxHeight: 160
  },
  remove:{
    position:"absolute",
    top:"1rem",
    left:"1rem"
  }
};
export const hover ={
  comment:{
    backgroundColor:'2744e8'
  },
  retweet:{
    backgroundColor:'#13e824'
  },
  like:{
    backgroundColor:'#ff1251'
  },
  share:{
    backgroundColor:'#2744e8'
  }
}

export default divider;

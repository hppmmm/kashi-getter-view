export const dlNowAction = () => ({
  type:"LOADING",
  status:"LOADING"
})

export const dlFinishAction = (title,kashi) => ({
  type:"FINISH",
  title,
  kashi,
  status:"FINISH"
});

export const dlFailedAction = () => ({
  type:"FAILED",
  status:"FAILED"
});

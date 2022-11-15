export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });

  try {
  } catch (err) {
    next(err);
  }
};
export const updateVideo = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const getVideo = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

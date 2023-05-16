import User from "../models/User";
import Repository from "../models/Repository";

class RepositoryController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const { q } = req.query;
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json();
      }
      let query = {};
      if (q) {
        query = { url: { $regex: q } };
      }
      const repositories = await Repository.find({
        userId: user_id,
        ...query
      });
      return res.json(repositories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { name, url } = req.body;
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json();
      }

      const repositories = await Repository.findOne({
        userId: user_id,
        url,
      });
      if (repositories) {
        return res
          .status(422)
          .json({ message: `Repository ${name} already exists.` });
      }
      const newRepositories = await Repository.create({
        name,
        url,
        userId: user_id,
      });

      return res.status(201).json(newRepositories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;

      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json();
      }

      const repositories = await Repository.findOne({
        userId: user_id,
        _id: id,
      });
      if (!repositories) {
        return res.status(404).json();
      }
      await Repository.deleteOne();
      return res.status(200).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new RepositoryController();

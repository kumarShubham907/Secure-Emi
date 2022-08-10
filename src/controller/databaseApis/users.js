import bcrypt from 'bcrypt'
import User from '../../models/users';
import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../../config';

const getUserList = {

    async createUsersRole(req, res, next) {
        const user = new User({
            mobileNo: req.body.mobileNo,
            status: req.body.status,
            roles: req.body.roles,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        User.findOne({
            mobileNo: req.body.mobileNo
        }).exec((err, userlist) => {
            if (!userlist) {
                user.save((err, user) => {
                    if (err) return res.status(500).send({ message: err })
                    res.json({ message: `${req.body.roles} Registered Successfully` })
                });
            }
            else {
                return res.status(201).send({ message: `User Already Exsist` })
            }
        })
    },

    async login(req, res) {
        User.findOne({
            mobileNo: req.body.mobileNo,
        })
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                
                if (!user) {
                    return res.status(404).send({ message: "User Not found." });
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({ message: "Invalid Password!" });
                }

                var token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
                    expiresIn: 86400, // 24 hours
                });

                res.status(200).send({
                    id: user._id,
                    mobileNo: user.mobileNo,
                    status: user.status,
                    roles: user.roles,
                    token: token
                });
            });
    }
}
export default getUserList
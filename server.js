const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');
const dbConfig = require ('./config/db.config')
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the Database', err);
    process.exit();
});
const userLogin = require('./app/routes/login.routes');
app.use('/login',userLogin);

const LicenseeRoute = require('./app/routes/licensee.routes');
app.use('/licensee',LicenseeRoute);
const myteamRoute = require('./app/routes/myteam.routes ');
app.use('/myteam',myteamRoute);

const AdmissionRoute = require('./app/routes/admission.routes');
app.use('/std_profile',AdmissionRoute);

const CourseRoute = require('./app/routes/course.routes');
app.use('/course',CourseRoute);

const supportenqRoute = require('./app/routes/supportEnq.routes')
app.use('/supportEnq',supportenqRoute)





const UserRoute = require('./app/routes/enq.routes')
app.use('/enquiry',UserRoute)

const supportTypeRoute = require('./app/routes/supportType.routes')
app.use('/supportType',supportTypeRoute)

const sourceRoute = require('./app/routes/source.routes');
app.use('/source',sourceRoute);

const enmodeRoute = require('./app/routes/enmode.routes');
app.use('/enmode',enmodeRoute);

const courseSetupRoute = require('./app/routes/course_setup.routes');
app.use('/course_setup', courseSetupRoute);

const courseCategorypRoute = require('./app/routes/course.category.routes');
app.use('/course_ctgry', courseCategorypRoute);

const courseTrackRoute = require('./app/routes/course.track.routes');
app.use('/course_track', courseTrackRoute);

const courseDurationRoute = require('./app/routes/course.duration.routes');
app.use('/course_duration', courseDurationRoute);

const courseSubjectRoute = require('./app/routes/subject.routes');
app.use('/course_subject', courseSubjectRoute);

const courseTopicRoute = require('./app/routes/course.topic.routes');
app.use('/course_topic', courseTopicRoute);



app.get('/', (req, res) => {
    res.json({"message": "Hello Your Server Is Running"});
});
app.listen(8000, () => {
    console.log("Server is listening on port 8000");


});


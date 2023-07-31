"use strict";

var _data = require("./data.js");

var _constants = require("./constants.js");

var _thumbnail = require("./thumbnail.js");

require("./form.js");

require("./scale.js");

(0, _thumbnail.renderThumbnails)((0, _data.getPhotos)(_constants.PHOTOS));
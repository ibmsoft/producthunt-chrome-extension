/**
 * Dependencies.
 */

let NullAnalytics = require('./null-analytics');
let Tracker = require('./tracker');

/**
 * Constants.
 */

const ANALYTICS_KEY = process.env.ANALYTICS_KEY;

/**
 * Locals.
 */

let enableAnalytics = window.ProductHuntAnalytics && ANALYTICS_KEY;
let ProductHuntAnalytics = enableAnalytics ? window.ProductHuntAnalytics : NullAnalytics;
let analytics = new ProductHuntAnalytics(process.env.ANALYTICS_KEY);

/**
 * Export a new `Tracker`.
 */

module.exports = new Tracker(analytics);

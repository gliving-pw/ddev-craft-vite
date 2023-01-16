<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

define('IS_DEV', App::env('CRAFT_ENVIRONMENT') === 'dev');
define('IS_PROD', App::env('CRAFT_ENVIRONMENT') === 'production');

return [
    'defaultWeekStartDay' => 0,
    'omitScriptNameInUrls' => true,
    'devMode' => IS_DEV,
    'allowAdminChanges' => IS_DEV,
    'disallowRobots' => !IS_PROD,
    'enableTemplateCaching' => !IS_DEV,
    'aliases' => [
        '@web' => App::env("PRIMARY_SITE_URL"),
        '@webroot' => dirname(__DIR__) . '/public',
    ],
];

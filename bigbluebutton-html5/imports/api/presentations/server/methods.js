import { Meteor } from 'meteor/meteor';
import removePresentation from './methods/removePresentation';
import setPresentation from './methods/setPresentation';
import setPresentationDownloadable from './methods/setPresentationDownloadable';
import exportPresentation from './methods/exportPresentation';

Meteor.methods({
  removePresentation,
  setPresentation,
  setPresentationDownloadable,
  exportPresentation,
});

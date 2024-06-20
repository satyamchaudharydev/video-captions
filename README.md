# Video with Captions App

This is a simple Next.js application that allows users to input a video URL and captions in WebVTT format. The application then displays the video with the provided captions.

## Features

- Input a video URL
- Input captions in WebVTT format
- Display video with captions

## Technologies Used

- **Next.js**: A React framework for server-rendered or statically exported React applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.


### Future Enhancements

Due to time constraints, the current implementation is limited to basic functionality. However, if this were to be developed into a full-fledged application, several advanced features could be added to enhance the user experience:

1. **Advanced Caption Editor:** 
   - Users could have the ability to align captions, change fonts, styles, and sizes, and preview changes in real-time.
   - An interactive timeline editor would allow users to easily add, edit, and delete captions at specific timestamps.
   - Support for importing and exporting captions in various formats, such as SRT, VTT, and more.

2. **Multi-language Support:** 
   - Support for multiple caption tracks in different languages, allowing users to switch between them seamlessly.

3. **Backend Integration:**
   - A backend service to store and retrieve captions, allowing users to save their progress and collaborate with others.
   - User authentication and profile management for personalized experiences.

4. **Responsive Design:**
   - Ensure the application is fully responsive, providing a smooth experience across various devices and screen sizes.

6. **Performance Optimization:**
   - Efficient handling of large video files and captions to ensure smooth playback and editing.

These enhancements would make the application more robust, user-friendly, and versatile, providing a comprehensive tool for adding and editing video captions.

### Testing

For testing, you can use the following sample data:
1. Input Video Url - http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
2. Caption - `
WEBVTT

1
00:00:00.000 --> 00:00:05.000
Welcome to the video. This is the first caption.

2
00:00:05.000 --> 00:00:10.000
Here is some more text for the second caption.

3
00:00:10.000 --> 00:00:15.000
This is the third caption, showing a different part of the video.

4
00:00:15.000 --> 00:00:20.000
And finally, this is the last caption in this example

`

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satyamchaudharydev/video-captions.git
   cd video-captions

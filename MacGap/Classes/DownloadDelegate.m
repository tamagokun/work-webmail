//
//  DownloadDelegate.m
//  MacGap
//
//  Created by Mike Kruk on 5/8/12.
//  Copyright (c) 2012 Twitter. All rights reserved.
//

#import "DownloadDelegate.h"

@implementation DownloadDelegate

- (void)downloadDidBegin:(NSURLDownload *)download
{
	// This is where you would do something nice in terms of UI.
	NSLog(@"Download started.");
}

- (void)download:(NSURLDownload *)download didReceiveDataOfLength:(unsigned)length
{
	// Data received.  Update a progress bar somewhere
	NSLog(@"Some data was downloaded");
}

- (void)download:(NSURLDownload *)download didReceiveResponse:(NSURLResponse *)response
{
	// A response was received.  We can use the response to get some interesting stuff like the expected content length
	// for use in progress indicators and a suggested filename that I'll be using here..
	suggestedFilename = [response suggestedFilename];
}

- (void)download:(NSURLDownload *)download decideDestinationWithSuggestedFilename:(NSString *)filename
{
    panel = [NSSavePanel savePanel];
    [panel setNameFieldStringValue:suggestedFilename];
	if ([panel runModal] == NSFileHandlingPanelCancelButton)
	{
		[download cancel];
	}
	else
	{
        NSString *destination;
        destination = [[panel directoryURL] path];
        destination = [destination stringByAppendingPathComponent:suggestedFilename];
		[download setDestination:destination allowOverwrite:YES];
	}
}

@end

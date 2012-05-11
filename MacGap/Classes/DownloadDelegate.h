//
//  DownloadDelegate.h
//  MacGap
//
//  Created by Mike Kruk on 5/8/12.
//  Copyright (c) 2012 Twitter. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DownloadDelegate : NSObject {
    NSString *suggestedFilename;
    
    NSSavePanel *panel;
}

@end

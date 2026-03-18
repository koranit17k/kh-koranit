---
title: Project Structure
description: Project structure of attendance
navigation:
  icon: i-lucide-folder-tree
---

## Global structure

## Database Project Structure

```
./attendance
  ├── README.md                  # README for Dev & Ai
  ├──/fonts                      # Thai fonts used in report
  ├──/docs                       # Content
  │   ├── 1.workflow.md          # Workflow
  │   ├── 2.reportdetails.md     # Report Details
  │   ├── 3.exampledata.md       # Example Data
  │   ├── 4.vitest.md            # how to use test
  │   └── 5.workflowreport.md    # Report workflow
  ├──/report                     # Jasper Report
  │   ├── *.jrxml                # JRXML Source Files
  │   ├── *.jasper               # Jasper Report Files
  │   ├── A01.jrxml              # Check Daily Time
  │   ├── A02.jrxml              # Check summary persoanl
  │   └── A03.jrxml              # Check monthly summary
  ├──/sql                        # SQL Script
  │   ├── /sqltest               # test accuracy by sql
  |   |   ├── 1.seed_test_data.sql   # Create test data
  │   |   ├── 2.check_results.sql    # Check test data
  │   |   └── 3.cleartest.sql        # Clear test data
  │   ├── /storage                           # Storage sql
  │   |   ├── insert_attendance.sql          # insert time data 
  │   |   ├── insert_and_clean_emp.sql  # insert new employee, update all emp to 1, clean who aren't working.
  │   |   ├── myviewtranslate.sql            # calculate view before myview
  │   |   └── update_attendance.sql          # update calculate view to attendance
  │   ├── 1.database.sql         # Create Database & User
  │   ├── 2.table.sql            # Create Table
  │   ├── 3.view.sql             # Create View
  │   ├── 4.myview.sql           # Create view for use calculator
  │   ├── 5.procedure.sql        # Procedure sql before autorun
  │   ├── 6.setup_autorun.sql    # Setup autorun
  │   └── 7.check_autorun.sql    # Check autorun
  ├──/script                     # Script
  │   ├── restore.sh             # Restore Database
  │   ├── runtest.sh             # runtest by sql
  │   ├── backup.sh              # Backup Database
  │   └── copyreport.sh          # copy-paste report.jasper file for use 
  ├──/test                       # accuracy test
  │   ├── sum.js                 # mock-up for test
  │   ├── sum.test.js            # mock-up for test
  │   └── att.tes.js             # attendance test
  ├──.prettierrc                 # Prettier config format
  └──.gitignore                  # don't commit this file
```
 try {
                                    fs.copyFileSync(copyFrom, copyTo)
                                    console.log("Succesffuly Copied And Moved The File")
                                } catch (err) {
                                    throw err
                                }
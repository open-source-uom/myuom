import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    FormControl,
    Flex,
    Box,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
import {
    FaQuestionCircle,
    FaInfoCircle,
    FaFileAlt,
    FaShareAlt,
    FaGitlab,
    FaBook,
    FaRegComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";
import i18n from "../../i18n";
import LanguagePicker from "./LanguagePicker";
import DepartmentPicker from "./DepartmentPicker";
import SettingsOption from "./SettingsOption";
import ThemeToggle from "./ThemeToggle";

export function SettingsDrawer({ isOpen, onClose }) {
    const handleShare = (e) => {
        const shareOpts = {
            title: "myUoM",
            url: "https://gitlab.com/opensourceuom/myUoM/",
        };
        // on PCs the function does not exist we can define another behavior
        if (navigator.canShare) {
            if (navigator.canShare(shareOpts)) {
                navigator.share(shareOpts);
            }
        } else {
            console.log("cannot share")
        }


    };
    return (
        <Drawer
            fontFamily="Syne"
            placement={"right"}
            onClose={onClose}
            isOpen={isOpen}
            autoFocus={false}
            size={["full", "md", "lg"]}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader
                    color={useColorModeValue("#0050e0", "#f3f3f3")}
                    backgroundColor={useColorModeValue("#f3f3f3", "black")}
                    borderBottomWidth="1px"
                    fontFamily="Syne"
                >
                    {i18n.t("settings_title")}
                </DrawerHeader>
                <DrawerBody
                    backgroundColor={useColorModeValue("#f3f3f3", "black")}
                    fontFamily="Syne"
                >
                    <Flex
                        direction="column"
                        fontFamily="Syne"
                        justifyItems={"center"}
                        color={useColorModeValue("#0050e0", "#f3f3f3")}
                        borderRadius="0.5rem"
                        my={"2rem"}
                    >
                        <LanguagePicker />
                        <DepartmentPicker onClose={onClose} />

                    </Flex>
                    <Box>
                        <FormControl
                            display="flex"
                            alignItems="flex-start"
                            justifyContent={"space-between"}
                            color={useColorModeValue("#0050e0", "#f3f3f3")}
                            my={"2rem"}
                        >
                            <ThemeToggle />
                        </FormControl>

                        <Box
                            color={useColorModeValue("#0050e0", "#f3f3f3")}
                            alignItems="flex-start"
                            justifyContent={"space-between"}
                        >
                            <Link to={"/faq"}>
                                <SettingsOption Icon={FaQuestionCircle} onClick={onClose} text={i18n.t("frequent_questions")} />
                            </Link>

                            <Link to={"/about"}>
                                <SettingsOption Icon={FaInfoCircle} onClick={onClose} text={i18n.t("about_us")} />
                            </Link>

                            <a
                                href="https://gitlab.com/opensourceuom/myUoM/-/blob/main/LICENSE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaFileAlt} onClick={onClose} text={i18n.t("license")} />
                            </a>
                            <a
                                href="https://drive.google.com/drive/folders/1LToRmuLuJDSXsTl99GL80mmP4ifcjw6V?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaBook} onClick={onClose} text={i18n.t("app_manual")} />

                            </a>
                            <SettingsOption Icon={FaShareAlt} onClick={handleShare} text={i18n.t("share_app")} />
                            <a
                                href="https://gitlab.com/opensourceuom/myUoM"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaGitlab} onClick={onClose} text={i18n.t("gitlab_contribute")} />
                            </a>
                            <a
                                href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSduM517c4OtIs-CNv5cjQtYcj6OXRDtCP6x0Q7d4Ymhd3xQMg/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaRegComment} onClick={onClose} text={i18n.t("form_feedback")} />
                            </a>
                        </Box>
                    </Box>
                </DrawerBody>

                <DrawerFooter
                    backgroundColor={useColorModeValue("#f3f3f3", "black")}
                    color={useColorModeValue("#0050e0", "#f3f3f3")}
                    justifyContent={"center"}
                >
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        fontWeight="bold"
                        fontFamily="Syne"
                        fontSize={{ base: "sm", lg: "lg" }}
                        _hover={false}
                        leftIcon={<Box ml="0.5rem" pt="0.4rem">
                            <CloseIcon />
                        </Box>}
                    >
                        {i18n.t("close")}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>);
}
